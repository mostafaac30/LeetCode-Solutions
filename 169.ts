function majorityElement(nums: number[]): number {

    var ht = new Map();
    var num = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (!ht.has(nums[i])) {
            ht.set(nums[i], 0);

        }
        const cnt = ht.get(nums[i]) as number;
        console.log(cnt);
        ht.set(nums[i], cnt + 1);
        if (ht.get(nums[i]) > ht.get(num)) {
            num = nums[i]
        }
    }
    console.log(ht)
    return num;
};