import React, { useState } from 'react';
import './Reg.scss';

const Reg = ({ isOpen, onClose, children }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Ошибка регистрации');
            }

            const data = await response.json();
            console.log('User registered successfully:', data);
            alert('Регистрация прошла успешно!');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form">
            <button className="Reg-btn" onClick={onClose}>×</button>
            {children}
            <h2 className="form__title">Регистрация</h2>
            {error && <p className="form__Error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Имя пользователя</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="form__input"
                    />
                </div>
                <div>
                    <label htmlFor="email">Электронная почта</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form__input"
                    />
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="form__input"
                    />
                </div>
                <button type="submit" disabled={loading} className="form__button">
                    {loading ? 'Загрузка...' : 'Зарегистрироваться'}
                </button>
            </form>
            
        </div>
    );
};

export default Reg;
