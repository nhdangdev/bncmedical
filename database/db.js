import React, { Component } from 'react';

class Database extends React.Component {

    state = {
        products: [
            {
                "id": 1,
                "title" : "Bộ phòng dịch Cấp độ 3",
                "description": "Bộ đồ ND Lv3",
                "content": "01 Bộ áo mũ liền quần (SMS45)",
                "src": [
                    "https://www.upsieutoc.com/images/2020/06.27/img1.jpg",
                    "https://www.upsieutoc.com/images/2020/06.27/img2.jpg",
                    "https://www.upsieutoc.com/images/2020/06.27/img3.jpg"
                ],
                "price": "Liên hệ Hotline để được giá tốt nhất",
                "count": 1
            },
            {
                "id": 2,
                "title": "Bộ phòng dịch Lv4",
                "description": "Sub text của 2",
                "src": "https://i.ytimg.com/vi/ISpeaH7TOcw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC3sf_urrDr5aW1UH-4hXuUGAL80A",       
                "price": "Liên hệ Hotline để được giá tốt nhất",
                "count": 2
            },
            {
                "id": 3,
                "count": 3,
                "title": "Khẩu trang y tế 4 lớp",
                "description": "Khẩu trang vải, có lớp giấy kháng khuẩn, 4 lớp, màu xanh, đạt chứng chỉ ISO 13485:2016",
                "src": "https://i.ytimg.com/vi/vuQR6Mj64jQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC1GaujF8fP1m8UEGufSyiy2oRfqw",       
                "price": "Liên hệ Hotline để được giá tốt nhất",
                "count": 3
                
            }
            
        ]
    }

    render() {
        const { products } = this.state;
        console.log(products);
        return (
            <div ClassName='app'>
                Hello đây là database
            </div>
        );
    }
}

export default Database;