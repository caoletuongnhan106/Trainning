// 1.useState (Quản lý state đơn giản, cơ bản)
//- Trả về một cặp: giá trị state hiện tại và một hàm để cập nhật nó
//- Khi nào dùng: Khi cần lưu trữ và cập nhật trạng thái (state) trong component, ví dụ: giá trị input, trạng thái toggle, dữ liệu từ API
//- Không gọi setState trong vòng lặp hoặc điều kiện để tránh lỗi 
    import React, { useState } from 'react';
    const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
    };

// 2.useEffect (Xử lý side effects, cần cleanup để tránh memory leak)
//- Nhận hai tham số: một hàm callback (effect) và một mảng phụ thuộc (dependency array)
//- Fetch dữ liệu từ API
//- Đăng ký/ hủy đăng ký sự kiện (event listeners).
//- Cập nhật DOM hoặc các tác vụ bất đồng bộ.
    import React, { useState, useEffect } from 'react';
    function DataFetcher() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://api.example.com/data')
        .then((res) => res.json())
        .then((result) => setData(result));
        return () => console.log('Cleanup effect');
    }, []);
    return <div>{data ? data.name : 'Loading...'}</div>;
    }

// 3.useContext (Chia sẻ dữ liệu toàn cục, kết hợp TypeScript để type-safe)
//- Khi cần chia sẻ dữ liệu toàn cục (global state) giữa nhiều component, ví dụ: theme, thông tin user, ngôn ngữ
//- Chỉ nên dùng cho dữ liệu toàn cục, tránh lạm dụng vì có thể làm code khó theo dõi
    import React, { useContext, createContext } from 'react';
    const ThemeContext = createContext();
    function App() {
    return (
        <ThemeContext.Provider value={{ theme: 'dark' }}>
        <ThemeComponent />
        </ThemeContext.Provider>
    );
    }
    function ThemeComponent() {
    const { theme } = useContext(ThemeContext);
    return <div>Current theme: {theme}</div>;
    }

// 4.onChange 
//- Dùng để xử lý thay đổi giá trị input
//- Kết hợp với useState để tạo controlled input
//- Thường dùng cho form hoặc lọc dữ liệu real-time

    import React, { useState } from 'react';

    function InputExample() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value); // Lấy giá trị từ input
    };

    return (
        <div>
        <input type="text" value={text} onChange={handleChange} />
        <p>You typed: {text}</p>
        </div>
    );
    }

// 5. onSubmit
//- Dùng để xử lý form khi submit
//- Gọi event.preventDefault() để ngăn reload trang
//- Thường dùng để gửi dữ liệu hoặc xử lý logic cuối cùng

    import React, { useState } from 'react';

    function FormExample() {
    const [formData, setFormData] = useState({ name: '' });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Ngăn reload trang
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
        />
        <button type="submit">Submit</button>
        </form>
    );
    }
// 6.onClick
//- Dùng để xử lý click vào phần tử
//- Phổ biến cho nút, link, hoặc bất kỳ tương tác nào
//- Tối ưu bằng useCallback khi truyền qua component con

    import React, { useState } from 'react';

    function ButtonExample() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
        <button onClick={handleClick}>Click me</button>
        <p>Clicked: {count} times</p>
        </div>
    );
    }

// 7. toggle
//- Là hành động chuyển đổi giữa hai trạng thái
//- Thường dùng với useState và các sự kiện như onClick, onChange
//- Phổ biến trong UI như hiển thị/ẩn, bật/tắt
        import React, { useState } from 'react';

        function ToggleExample() {
        const [isVisible, setIsVisible] = useState(false);

        const toggleVisibility = () => {
            setIsVisible(!isVisible); // Chuyển đổi true/false
        };

        return (
            <div>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            {isVisible && <p>This is a toggled content!</p>}
            </div>
        );
        }