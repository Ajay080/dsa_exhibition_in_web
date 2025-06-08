export default function TwoSum() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Two Sum Solution</h2>
      <p>
        Use a hashmap to store the complement of the current number. If the
        complement exists in the map, return the indices.
      </p>
      <pre className="bg-gray-800 text-green-200 p-4 rounded mt-4 overflow-auto">
        {`function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`}
      </pre>
    </div>
  );
}
