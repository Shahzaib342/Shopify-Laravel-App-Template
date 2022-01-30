import React from 'react';
import {Card, Page} from '@shopify/polaris';

var __html = require('../components/changelog');
var template = {__html: __html};

function ChangeLog({navigateRoutes}) {
    return (
        <Page
            fullWidth
            breadcrumbs={[{content: 'Changelog', onAction: () => navigateRoutes(-2)}]}
            title="Changelog"
        >
            <div className="page_changelog">
                <span dangerouslySetInnerHTML={template}/>
            </div>
        </Page>
    );
}

export default ChangeLog