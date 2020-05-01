// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

class User {
    constructor(currentRank = -8, currentProgress = 0) {
        this.currentRank = currentRank;
        this.currentProgress = currentProgress;
        this.levelRange = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8]
    }

    get rank() {
        return this.currentRank
    }

    get progress() {
        return this.currentProgress;
    }

    incProgress(activityLevel) {
        // check whether progress will exceed 100, if so up rank and carry over ranking points
        if (activityLevel === this.currentRank) {
            console.log('incProgress - current level');
            this.currentProgress += 3;
        } else if (activityLevel === this.currentRank-1) {
            console.log('incProgress - current level -1');
            this.currentProgress += 1;
        } else if (activityLevel > this.currentRank) {
            const d = activityLevel - this.currentRank;
            console.log(`incProgress - current level + ${d}`);
            this.currentProgress += (10*d*d);
        } else {
            console.log('incProgress - activity ignored');
        }
    }
}



var user = new User();
// console.log(user);
console.log('user.rank:', user.rank) // => -8
console.log('user.progress:', user.progress) // => 0
user.incProgress(-7)
// user.progress // => 10
// user.incProgress(-5) // will add 90 progress
// user.progress # => 0 // progress is now zero
// user.rank # => -7 // rank was upgraded to -7