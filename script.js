let nums = [2, 4, 6, 8, 10]
let target = 12;

for (let i = 0; i < nums.length; i++) { 
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            console.log(i, j);
        }
    }

}


 const map = {}; // Object to store visited numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }

    return []; // Problem guarantees a solution, but good to have this