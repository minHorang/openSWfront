// router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || '/openSWfront'}>
      <App>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignupStep1 />} />
          <Route path="signup/step2" element={<SignupStep2 />} />
          <Route path="mypage" element={<MyPageWrapper />} />
          <Route path="mypage/auctionadd" element={<AuctionAdd />} />
          <Route path="mypage/workadd" element={<Workadd />} />
          <Route path="artwork" element={<ArtWork />} />
          <Route path="artwork/:id" element={<ArtDetail />} />
          <Route path="author" element={<Author />} />
          <Route path="auction/ongoing" element={<AuctionOngoing />} />
          <Route path="auction/completed" element={<AuctionCompleted />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
};

export default Router;
