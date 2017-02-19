cmake_minimum_required(VERSION 3.7)

# # Name of the project (will be the name of the plugin)
# # project(addon)


# ################################################################################
# ##
# ## 
# ##
# ################################################################################

# set(lib addon)

# file(GLOB SOURCE_FILES "src/module/async_pi_estimate/*.cc" "src/module/async_pi_estimate/*.h")
# add_library( ${lib} SHARED ${SOURCE_FILES})

# # Essential include files to build a node addon,
# # you should add this line in every CMake.js based project.
# # include_directories(${CMAKE_JS_INC})

# # Gives our library file a .node extension without any "lib" prefix
# set_target_properties(${lib} PROPERTIES PREFIX "" SUFFIX ".node")

# # Essential include files to build a node addon,
# # You should add this line in every CMake.js based project
# target_include_directories(${lib} PRIVATE ${CMAKE_JS_INC})

# # Essential library files to link to a node addon
# # You should add this line in every CMake.js based project
# target_link_libraries(${lib} ${CMAKE_JS_LIB})


# ################################################################################
# ##
# ## 
# ##
# ################################################################################

# set(lib winsearch)
# file(GLOB SOURCE_FILES "src/module/winSearch2/*.cpp" "src/module/winSearch2/*.h")

# add_library( ${lib} SHARED ${SOURCE_FILES})

# # Essential include files to build a node addon,
# # you should add this line in every CMake.js based project.
# # include_directories(${CMAKE_JS_INC})

# # Gives our library file a .node extension without any "lib" prefix
# set_target_properties(${lib} PROPERTIES PREFIX "" SUFFIX ".node")

# # Essential include files to build a node addon,
# # You should add this line in every CMake.js based project
# target_include_directories(${lib} PRIVATE ${CMAKE_JS_INC})

# # Essential library files to link to a node addon
# # You should add this line in every CMake.js based project
# target_link_libraries(${lib} ${CMAKE_JS_LIB})

################################################################################
##
## 
##
################################################################################

set(lib "winsearch")
file(GLOB SOURCE_FILES "src/module/winSearch/*.cpp" "src/module/winSearch/*.h")

add_library( ${lib} SHARED ${SOURCE_FILES})
# target_link_libraries( ${lib} "C:/Program Files (x86)/Windows Kits/10/UnionMetadata/Windows.winmd" )


# set( CMAKE_VS_PLATFORM_TOOLSET "Windows10SDK" )
set( CMAKE_VS_WINDOWS_TARGET_PLATFORM_VERSION "10.0.14393.0" )

set( prepend "EDH_!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!_" )
MESSAGE( "${prepend}platform=${CMAKE_VS_PLATFORM_NAME}" )
MESSAGE( "${prepend}toolset=${CMAKE_VS_PLATFORM_TOOLSET}" )



# set( VS_WINRT_REFERENCES "Platform;Windows;Windows::Foundation::Collections;Windows::Storage;Windows::Storage::Search")

set( CMAKE_SYSTEM_NAME WindowsStore )
set( CMAKE_SYSTEM_VERSION 10.0 )

# set( sd "C:/Program Files (x86)/Windows Kits/10/" )
# set( WindowsSDKVersion "10.0.14393.0" )

# target_link_libraries( ${lib} "${sd}bin")
# target_link_libraries( ${lib} "${sd}UnionMetadata")
# target_link_libraries( ${lib} "${sd}References")
# target_link_libraries( ${lib} "${sd}bin")

# target_link_libraries( ${lib} "{sd}bin" )
# target_link_libraries( ${lib} "${sd}UnionMetadata" )
# target_link_libraries( ${lib} "${sd}References" )
# target_link_libraries( ${lib} "${sd}lib/${WindowsSDKLibVersion}/um/${NODE_ARCH}" )


# target_link_libraries( ${lib} "${sd}include/${WindowsSDKVersion}/shared/" )
# target_link_libraries( ${lib} "${sd}include/${WindowsSDKVersion}/um/" )
# target_link_libraries( ${lib} "${sd}include/${WindowsSDKVersion}/winrt/" )

# target_link_libraries( ${lib} "${sd}References/CommonConfiguration/Neutral" )


set( MSVS15_COMPILE_FLAGS "/ZW" )
# set( MSVS15_LINKER_FLAGS "/AI \"C:/Program Files (x86)/Windows Kits/10/UnionMetadata/\"" )
# set( MSVS15_LINKER_FLAGS \"/WINMD\" )
# \"C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\BuildTools\\VC\\Tools\\MSVC\\14.10.24930\\lib\\x86\\store\\references\\platform.winmd\" 
# \"C:/Program Files (x86)/Windows Kits/10/References/Windows.Foundation.FoundationContract/2.0.0.0/Windows.Foundation.FoundationContract.winmd\" 
# \"C:/Program Files (x86)/Windows Kits/10/References/Windows.Foundation.UniversalApiContract/3.0.0.0/Windows.Foundation.UniversalApiContract.winmd\" " )
# set( MSVS15_LINKER_FLAGS "/AI \"C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\BuildTools\\VC\\Tools\\MSVC\\14.10.24930\\lib\\x86\\store\\references\\platform.winmd")


# add_definitions( ${MSVS15_COMPILE_FLAGS} )

# SET_TARGET_PROPERTIES(${lib} PROPERTIES VS_WINRT_EXTENSIONS TRUE)
# VS_WINRT_EXTENSIONS REPLACED BY VS_WINRT_COMPONENT
SET_TARGET_PROPERTIES(${lib} PROPERTIES VS_WINRT_COMPONENT TRUE)


# SET( CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${MSVS15_COMPILE_FLAGS} ${MSVS15_LINKER_FLAGS}" )
# ADD_DEFINITIONS(-ZW)

# SET( CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} ${MSVS15_LINKER_FLAGS}" )
# SET( VS_WINRT_COMPONENT )

SET( CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${MSVS15_COMPILE_FLAGS}")
# target_link_libraries(${lib} "C:/Program Files (x86)/Microsoft Visual Studio/2017/BuildTools/VC/Tools/MSVC/14.10.24930/lib/")
# target_link_libraries(${lib} "C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\VC\Tools\MSVC\14.10.24930\lib\x86\store\references")

# FIND_LIBRARY(PLATFORM_LIBRARY platform "C:/Program Files (x86)/Microsoft Visual Studio/2017/BuildTools/VC/Tools/MSVC/14.10.24930/lib/x86/store/reference/")
# TARGET_LINK_LIBRARIES(${lib} "C:/Program Files (x86)/Microsoft Visual Studio/2017/BuildTools/VC/Tools/MSVC/14.10.24930/lib/x86/store/references/platform.winmd")

# TARGET_LINK_LIBRARIES(${lib} "C:/Program Files (x86)/Windows Kits/10/References/Windows.Foundation.FoundationContract/2.0.0.0/Windows.Foundation.FoundationContract.winmd")
# TARGET_LINK_LIBRARIES(${lib} "C:/Program Files (x86)/Windows Kits/10/References/Windows.Foundation.UniversalApiContract/3.0.0.0/Windows.Foundation.UniversalApiContract.winmd")

# set_target_properties(${lib} PROPERTIES COMPILE_FLAGS "/ZW=no" )


# Gives our library file a .node extension without any "lib" prefix
set_target_properties(${lib} PROPERTIES PREFIX "" SUFFIX ".node")

# Essential include files to build a node addon,
# You should add this line in every CMake.js based project
target_include_directories(${lib} PRIVATE ${CMAKE_JS_INC})

# Essential library files to link to a node addon
# You should add this line in every CMake.js based project
target_link_libraries(${lib} ${CMAKE_JS_LIB})
