import { AuthContext } from './useAuth';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import propTypes from 'prop-types';

export function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', {
                email,
                password,
            });
            const { user, token } = response.data;

            localStorage.setItem('@RocketMovies:user', JSON.stringify(user));
            localStorage.setItem('@RocketMovies:token', token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            //api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user, token });
        } catch (error) {
            if (error.response) {
                return alert(`${error.response.data.status} : ${error.response.data.error}
                `);
            } else {
                return alert('Mão foi possível fazer login');
            }
        }
    }

    function signOut() {
        localStorage.removeItem('@RocketMovies:user');
        localStorage.removeItem('@RocketMovies:token');
        setData({});
    }

    async function updateProfile({ user, avatarFile }) {
        try {
            if (avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append('avatar', avatarFile);
                const response = await api.patch(
                    '/users/avatar',
                    fileUploadForm
                );

                user.avatar = response.data.avatar;
            }

            await api.put('/users', user);

            delete user.password;
            delete user.old_password;

            localStorage.setItem('@RocketMovies:user', JSON.stringify(user));

            setData({ user, token: data.token });

            alert('Perfil atualizado com sucesso');
        } catch (error) {
            if (error.response) {
                return alert(
                    `${error.response.data.status} : ${error.response.data.error}`
                );
            } else {
                return alert('Mão foi possível atualizar o perfil');
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem('@RocketMovies:user');
        const token = localStorage.getItem('@RocketMovies:token');

        if (user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            //api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user: JSON.parse(user), token });
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{ signIn, signOut, updateProfile, user: data.user }}
        >
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: propTypes.node.isRequired,
};
