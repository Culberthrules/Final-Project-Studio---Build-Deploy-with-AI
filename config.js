// Configuration and constants for the Deezer Music Player

// Mock data as fallback (always works)
const MOCK_TRACKS = [
    {
        id: '1',
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        preview: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_8e5c3fa4f8.mp3?filename=blinding-lights-15085.mp3',
        cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
        duration: 200,
        album: 'After Hours'
    },
    {
        id: '2',
        title: 'Save Your Tears',
        artist: 'The Weeknd',
        preview: 'https://cdn.pixabay.com/download/audio/2022/10/18/audio_7d9bdb0f2d.mp3?filename=save-your-tears-117199.mp3',
        cover: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop',
        duration: 215,
        album: 'After Hours'
    },
    {
        id: '3',
        title: 'Stay',
        artist: 'The Kid LAROI, Justin Bieber',
        preview: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_8e5c3fa4f8.mp3?filename=stay-149061.mp3',
        cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
        duration: 141,
        album: 'F*CK LOVE 3'
    },
    {
        id: '4',
        title: 'good 4 u',
        artist: 'Olivia Rodrigo',
        preview: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_8e5c3fa4f8.mp3?filename=good-4-u-15088.mp3',
        cover: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop',
        duration: 178,
        album: 'SOUR'
    },
    {
        id: '5',
        title: 'Levitating',
        artist: 'Dua Lipa',
        preview: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_8e5c3fa4f8.mp3?filename=levitating-15089.mp3',
        cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop',
        duration: 203,
        album: 'Future Nostalgia'
    }
];

// Default configuration
const DEFAULT_CONFIG = {
    searchLimit: 12,
    defaultVolume: 80,
    autoPlay: true,
    fallbackEnabled: true
};

// Quick search genres
const QUICK_SEARCH_GENRES = [
    'pop', 'rock', 'hip hop', 'electronic', 'jazz', 'classical'
];