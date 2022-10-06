export const torrentType = (type) => {
    switch (type) {
        case 'web':
            return 'WEB';
        // console.log('hd');
        case 'bluray':
            return 'BluRay';
        // console.log('full-hd');
        default:
            break;
    }
}