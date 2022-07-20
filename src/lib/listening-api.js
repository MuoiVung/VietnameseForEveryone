const FIREBASE_DOMAIN = 'https://vietnameseforeveryone-576e2-default-rtdb.asia-southeast1.firebasedatabase.app';

export const fetchListeningExercises = async () => {
    try {
        const response = await fetch(`${FIREBASE_DOMAIN}/listening-exercises.json`);

        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const data = await response.json();


        const listeningExercises = [];

        for (const key in data) {
            listeningExercises.push(data[key]);
        }

        return listeningExercises;
    }
    catch (error) {
        return null;
    }
};