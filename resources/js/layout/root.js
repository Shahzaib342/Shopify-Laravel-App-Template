import {AppProvider, TopBar, Navigation, Frame} from "@shopify/polaris";
import {HomeMajor, EditMajor, SettingsMajor, CustomersMajor, ExchangeMajor} from "@shopify/polaris-icons";
import React, {useState, useCallback} from "react";
import {useLocation} from 'react-router-dom'
import {ThemeContext} from './app';
import enTranslations from '@shopify/polaris/locales/en.json';
import {
    Routes,
    Route,
    useNavigate
} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Customizations from "../pages/customizations";
import Settings from "../pages/settings";
import AccountDetails from "../pages/account-details";
import ChangeLog from "../pages/changelog";


function Root() {
    const contextType = ThemeContext;
    const [links, setActiveLinks] = useState(contextType._currentValue);
    const navigate = useNavigate()
    const location = useLocation();
    const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

    Object.keys(links).map(function (key, value) {
        links[key].active = links[key].url === location.pathname;
    });

    const navigateRoutes = (path) => {
        navigate(path)
    }

    const toggleMobileNavigationActive = useCallback(
        () =>
            setMobileNavigationActive(
                (mobileNavigationActive) => !mobileNavigationActive,
            ),
        [],
    );

    const topBarMarkup = (
        <TopBar
            showNavigationToggle
            onNavigationToggle={toggleMobileNavigationActive}
        />
    );

    const navigationMarkup = (
        <Navigation location="/">
            <Navigation.Section
                title="Back In Stock App"
                items={[
                    {
                        url: "#",
                        label: 'Dashboard',
                        icon: HomeMajor,
                        selected: links.dashboard.active,
                        onClick: () => navigateRoutes(links.dashboard.url)
                    },
                    {
                        url: "#",
                        label: 'Customization',
                        icon: EditMajor,
                        selected: links.customizations.active,
                        onClick: () => navigateRoutes(links.customizations.url)
                    },
                    {
                        url: "#",
                        label: 'Settings',
                        icon: SettingsMajor,
                        selected: links.settings.active,
                        onClick: () => navigateRoutes(links.settings.url)
                    },
                    {
                        url: "#",
                        label: 'Account Details',
                        icon: CustomersMajor,
                        selected: links.account.active,
                        onClick: () => navigateRoutes(links.account.url)
                    },
                    {
                        url: "#",
                        label: 'Changelog',
                        icon: ExchangeMajor,
                        selected: links.changelog.active,
                        onClick: () => navigateRoutes("/changelog")
                    },
                ]}
            />
        </Navigation>
    );

    const theme = {
        logo: {
            width: 124,
            topBarSource:
                'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
            contextualSaveBarSource:
                'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
            accessibilityLabel: 'Jaded Pixel',
        },
    };

    return (
        <AppProvider
            theme={theme}
            i18n={enTranslations}
        >
            <Frame
                topBar={topBarMarkup}
                navigation={navigationMarkup}
                showMobileNavigation={mobileNavigationActive}
                onNavigationDismiss={toggleMobileNavigationActive}
            >
                <Routes>
                    <Route path={links.dashboard.url} element={<Dashboard navigateRoutes={navigateRoutes}/>}/>
                    <Route path={links.customizations.url} element={<Customizations navigateRoutes={navigateRoutes}/>}/>
                    <Route path={links.settings.url} element={<Settings navigateRoutes={navigateRoutes}/>}/>
                    <Route path={links.account.url} element={<AccountDetails navigateRoutes={navigateRoutes}/>}/>
                    <Route path={links.changelog.url} element={<ChangeLog navigateRoutes={navigateRoutes} />}/>
                </Routes>
            </Frame>
        </AppProvider>
    );
}

export default Root;