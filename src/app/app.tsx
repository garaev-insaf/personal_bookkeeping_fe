import { Navigate, Route, Routes } from 'react-router-dom';
import '../index.css';
import { lazy } from 'react';
import { RoutePaths } from './routes';
import { Separator, SidebarInset, SidebarProvider, SidebarTrigger } from '@shared/ui';
import { AppSidebar } from '@widgets/app-sidebar/ui/app-sidebar';

const HomePage = lazy(() => import('@pages/home/ui'));
const TransactionsPage = lazy(() => import('@pages/transactions/ui'));

export function App() {
    return (
        <div className="App">
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex flex-col pt-1 shrink-0 px-4 gap-4 transition-[width,height] ease-linear">
                        <div className="items-center">
                            <div className="flex items-center gap-2">
                                <SidebarTrigger className="-ml-1" />
                                <Separator orientation="vertical" className="mr-2 h-4" />
                                <span className="h4">Your Financial Dashboard</span>
                            </div>
                        </div>
                    </header>
                    <Routes>
                        <Route path={RoutePaths.HOME_PAGE} element={<HomePage />} />
                        <Route path={RoutePaths.TRANACTIONS_PAGE} element={<TransactionsPage />} />
                        <Route path="*" element={<Navigate to={RoutePaths.HOME_PAGE} />} />
                    </Routes>
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
}
