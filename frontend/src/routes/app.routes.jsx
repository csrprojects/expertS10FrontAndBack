import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { Movie } from '../pages/Movie';
import { Profile } from '../pages/Profile';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    );
};
