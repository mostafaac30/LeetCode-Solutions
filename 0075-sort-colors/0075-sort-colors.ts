/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums.length-1-i;j++){
        if(nums[j]>nums[j+1]){
            const temp=nums[j];
            nums[j]=nums[j+1];
            nums[j+1]=temp;
            
        }
    }
        
    }
};