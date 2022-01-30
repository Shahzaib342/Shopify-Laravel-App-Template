import {Page, Layout, Card, FormLayout, TextField} from "@shopify/polaris";
import React, {useCallback, useRef, useState, useEffect} from "react";

function AccountDetails({navigateRoutes}) {
    const defaultState = useRef({
        emailFieldValue: 'dummy@folio3.com',
        nameFieldValue: 'Back In Stock',
    });

    const [emailFieldValue, setEmailFieldValue] = useState(
        defaultState.current.emailFieldValue,
    );

    const [nameFieldValue, setNameFieldValue] = useState(
        defaultState.current.nameFieldValue,
    );

    const handleNameFieldChange = useCallback((value) => {
        setNameFieldValue(value);
    }, []);

    const handleEmailFieldChange = useCallback((value) => {
        setEmailFieldValue(value);
    }, []);

    useEffect(() => {
        console.log("in useEffect: name:", nameFieldValue);
        console.log("in useEffect: value:", emailFieldValue);
    }, [nameFieldValue, emailFieldValue]);

    return (
        <Page title="Account"
              fullWidth
              breadcrumbs={[{content: 'Account Details', onAction: () => navigateRoutes(-2)}]}
        >
            <Layout>
                <Layout.AnnotatedSection
                    title="Account details"
                    description="Back In Stock will use this as your account information."
                >
                    <Card sectioned>
                        <FormLayout>
                            <TextField
                                label="Full name"
                                value={nameFieldValue}
                                onChange={handleNameFieldChange}
                                autoComplete="name"
                            />
                            <TextField
                                type="email"
                                label="Email"
                                value={emailFieldValue}
                                onChange={handleEmailFieldChange}
                                autoComplete="email"
                            />
                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>
        </Page>
    );
}

export default AccountDetails;