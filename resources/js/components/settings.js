import React from 'react';
import {Page, Card} from '@shopify/polaris';

function Settings({navigateRoutes}) {
    return (
        <Page
            fullWidth
            title="Settings"
            breadcrumbs={[{content: 'Settings', onAction: () => navigateRoutes(-2)}]}
        >
            <Card>
            </Card>
        </Page>
    );
}

export default Settings
