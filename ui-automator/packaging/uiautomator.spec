Name:       uiautomator
Summary:    UIAutomator Service
Version:    0.1.1
Release:    1
Group:      Framework/system
License:    Apache-2.0
Source0:    %{name}-%{version}.tar.gz

BuildRequires:  pkgconfig(elementary)
BuildRequires:  pkgconfig(dlog)
BuildRequires:  pkgconfig(jsoncpp)
BuildRequires:  pkgconfig(edbus)
BuildRequires:  pkgconfig(systemd)
BuildRequires:  cmake
BuildRequires:  boost-devel
BuildRequires:  pkgconfig(capi-system-info)

%description
UIAutomator Service

%prep
%setup -q

%build
export CFLAGS+=" -fPIC"
export LDFLAGS+="-Wl,--rpath=%{PREFIX} -Wl,--as-needed"

cmake -DCMAKE_INSTALL_PREFIX=%{_prefix} ui-automator/src

make %{?jobs:-j%jobs}

%install
rm -rf %{buildroot}
%make_install

%files -n uiautomator
/uiautomator
