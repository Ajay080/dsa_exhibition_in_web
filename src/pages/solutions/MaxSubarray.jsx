export default function MaxSubarray() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Maximum Subarray (Kadane's)</h2>
      <p>Use dynamic programming to keep track of current max and overall max.</p>
      <pre className="bg-gray-800 text-green-200 p-4 rounded mt-4 overflow-auto">
        {`function maxSubArray(nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
}`}
      </pre>
    </div>
  );
}
