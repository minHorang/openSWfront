import App from './App';
import Main from './pages/main/Main';
import Login from './pages/Login/Login';
import MyPageWrapper from './pages/MyPage/MyPageWrapper';
import Workadd from './pages/MyPage/workadd';
import Author from './pages/Author/Author';
import AuctionOngoing from './pages/Auction/AuctionOngoing';
import ArtWork from './pages/ArtWork/ArtWork';
import ArtDetail from './pages/ArtWork/ArtDetail';
import SignupStep1 from './pages/SignUp/SignUpStep1';
import SignupStep2 from './pages/SignUp/SignUpStep2';
import AuctionAdd from './pages/MyPage/auctionadd';
import AuctionCompleted from './pages/Auction/AuctionCompleted';
import { createBrowserRouter } from 'react-router-dom';

const basename = '/openSWfront'; // GitHub Pages에서 사용하는 base 경로

const router = createBrowserRouter([
  {
    path: basename + '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignupStep1 />,
      },
      {
        path: 'signup/step2',
        element: <SignupStep2 />,
      },
      {
        path: 'mypage',
        element: <MyPageWrapper />,
      },
      {
        path: 'mypage/auctionadd',
        element: <AuctionAdd />,
      },
      {
        path: 'mypage/workadd',
        element: <Workadd />,
      },
      {
        path: 'artwork',
        element: <ArtWork />,
      },
      {
        path: 'artwork/:id',
        element: <ArtDetail />,
      },
      {
        path: 'author',
        element: <Author />,
      },
      {
        path: 'auction/ongoing',
        element: <AuctionOngoing />,
      },
      {
        path: 'auction/completed',
        element: <AuctionCompleted />,
      },
    ],
  },
]);

export default router;
