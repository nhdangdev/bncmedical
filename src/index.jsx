import React from 'react'
// import AlbumList from './components/AlbumList'

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'ABCDE',
            thumbnailUrl: 'https://i.ytimg.com/vi/iMzMRhBx9mQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDvXgGgIO5zWeklmCXv1RjhNKnVJg',
        },
        {
            id: 2,
            name: 'Lần đầu tiên hẹn hò',
            thumbnailUrl: 'https://i.ytimg.com/vi/ISpeaH7TOcw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC3sf_urrDr5aW1UH-4hXuUGAL80A',
        },
        {
            id: 3,
            name: 'Try - P!nk',
            thumbnailUrl: 'https://i.ytimg.com/vi/52Zs3Jo7cy0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBjDAJPkNKULqFIxmGYZniUhcPiaQ',
        },
        {
            id: 4,
            name: 'Hislerim',
            thumbnailUrl: 'https://i.ytimg.com/vi/vuQR6Mj64jQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC1GaujF8fP1m8UEGufSyiy2oRfqw',
        },
    ]

    return (
        <div>
            <h2>Có thể bạn thích đấy</h2>
            <AlbumList albumList={albumList}/>
        </div>
    )
}

AlbumFeature.propTypes = {

};

export default AlbumFeature

