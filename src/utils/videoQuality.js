export const videoQuality = (quality) => {
    // console.log(quality)
    switch (quality) {
        case '720p':
            return 'hd';
        // console.log('hd');
        case '1080p':
            return 'full-hd';
        // console.log('full-hd');
        case '2160p':
            return 'four-K';
        // console.log('4K');
        case '3D':
            return 'three-D';
        // console.log('3D');
        default:
            break;
    }
}