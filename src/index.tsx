import {store} from 'store';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from 'pwa/serviceWorkerRegistration';
import {RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';
import GlobalStyle from 'components/style/GlobalStyle';
import AntdConfig from 'components/style/AntdConfig';
import {theme} from 'AppTheme';
import {ThemeProvider} from 'styled-components';
import {router} from 'router/router';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <AntdConfig>
                <Provider store={store}>
                    <GlobalStyle />
                    <RouterProvider router={router} />
                </Provider>
            </AntdConfig>
        </ThemeProvider>
    </StrictMode>
);

serviceWorkerRegistration.unregister();
