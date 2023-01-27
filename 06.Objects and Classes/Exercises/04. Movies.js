function solve(args) {
    let movies = [];
    let isDirectorFirst = false;
    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = null;
            this.date = null;
        }
        print() {
            if (this.director !== null || this.date !== null) {
                console.log(JSON.stringify(this));
            }
        }
    }


    for (let i = 0; i < args.length; i++) {
        let cmd = args[i].split(' ')
        if (cmd[0] == "addMovie") {
            cmd = args[i].split('addMovie ')
            let movie = new Movie(cmd[1]);
            movies.push(movie);
        }
        else {
            if (cmd.includes("directedBy")) {
                cmd = args[i].split(" directedBy ")
                let movie = movies.find(x => x.name == cmd[0])
                if (movie) {
                    movie.director = cmd[1];
                    isDirectorFirst = true;
                }
            }
            else {
                cmd = args[i].split(" onDate ")
                let movie = movies.find(x => x.name == cmd[0])
                if (movie) {
                    movie.date = cmd[1];
                }
            }
        }

    }

    for (const el of movies) {
        if (this.director !== null || this.date !== null) {
            console.log(JSON.stringify(el));
        }
    }
}


solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);