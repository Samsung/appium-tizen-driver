CMAKE_MINIMUM_REQUIRED(VERSION 2.6)
PROJECT(uiautomator)

SET(PACKAGE	${PROJECT_NAME})
SET(DEST	"/")

FILE(GLOB_RECURSE SRCS "*.cpp")

# -----------------------------------------------------------------------------
# Set build type (Release by default)
# -----------------------------------------------------------------------------

IF("${CMAKE_BUILD_TYPE}" STREQUAL "")
     SET(CMAKE_BUILD_TYPE Release)
ENDIF("${CMAKE_BUILD_TYPE}" STREQUAL "")
MESSAGE("Build type: ${CMAKE_BUILD_TYPE}")

# -----------------------------------------------------------------------------
# Required platform modules
# -----------------------------------------------------------------------------
INCLUDE(FindPkgConfig)

SET(PKG_MODULES
    dlog
    elementary
    edbus
    jsoncpp
    capi-system-info
)
PKG_CHECK_MODULES(pkgs REQUIRED ${PKG_MODULES})

FOREACH(flag ${pkgs_CFLAGS})
    SET(EXTRA_CFLAGS "${EXTRA_CFLAGS} ${flag}")
ENDFOREACH(flag)

# -----------------------------------------------------------------------------
# CFlags
# -----------------------------------------------------------------------------
SET(CMAKE_CXX_FLAGS_PROFILING  "-O0 -std=c++0x -g -pg")
SET(CMAKE_CXX_FLAGS_DEBUG      "-O0 -std=c++0x -g")
SET(CMAKE_CXX_FLAGS_RELEASE    "-O3 -std=c++0x -Wall -pthread ${EXTRA_CFLAGS}")

ADD_DEFINITIONS("-DUIAUTOMATOR_DLOG")

ADD_EXECUTABLE(${PROJECT_NAME} ${SRCS})
TARGET_LINK_LIBRARIES(${PROJECT_NAME} ${pkgs_LDFLAGS} "-lm -ldl -lrt")

INSTALL(TARGETS ${PROJECT_NAME} DESTINATION ${DEST})
