import React from 'react';
import {Card, Page} from '@shopify/polaris';

function Customizations({navigateRoutes}) {
    return (
        <Page
            fullWidth
            breadcrumbs={[{content: 'Customizations', onAction: () => navigateRoutes(-2)}]}
            title="Customization"
        >
            <Card>
            </Card>
        </Page>
    );
}

export default Customizations