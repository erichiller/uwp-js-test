#include "index.h"

#include <nan.h>

using namespace concurrency;
using namespace Platform;
using namespace Windows::Foundation::Collections;
using namespace Windows::Storage;
using namespace Windows::Storage::Search;



using v8::FunctionTemplate;
using v8::Handle;
using v8::Object;
using v8::String;



NAN_METHOD(winsearch) {
  auto fileTypeFilter =
      ref new Platform::Collections::Vector<Platform::String ^>();
  fileTypeFilter->Append("*");
  auto queryOptions =
      ref new QueryOptions(CommonFileQuery::OrderBySearchRank, fileTypeFilter);
  // use the user's input to make a query
  queryOptions->UserSearchFilter = "adafruit";

  create_task(KnownFolders::GetFolderForUserAsync(nullptr /* current user */,
                                                  KnownFolderId::MusicLibrary))
      .then([this, queryOptions](StorageFolder ^ musicFolder) {
        auto queryResult =
            musicFolder->CreateFileQueryWithOptions(queryOptions);
        // find all files that match the query
        return queryResult->GetFilesAsync();
      })
      .then([this, queryOptions](IVectorView<StorageFile ^> ^ files) {
        String ^ outputText = "";

        // output how many files that match the query were found
        if (files->Size == 0) {
          outputText +=
              "No files found for '" + queryOptions->UserSearchFilter + "'";
        } else if (files->Size == 1) {
          outputText += files->Size.ToString() + " file found:\n\n";
        } else {
          outputText += files->Size.ToString() + " files found:\n\n";
        }

        // output the name of each file that matches the query
        for (unsigned int i = 0; i < files->Size; i++) {
          outputText += files->GetAt(i)->Name + "\n";
        }


        info.GetReturnValue().Set(Nan::New(outputText).ToLocalChecked());
        // OutputTextBlock->Text = outputText;
      });
}
