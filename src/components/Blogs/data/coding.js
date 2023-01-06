export const problems = [
    {
        "title": "Median of Two Sorted Arrays",
        "prob_desc": "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
        "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "solution_desc": ["For this problem, we are considering the nums1 array to be of smaller length. Therefore if the that is not the case, need to swap the arrays before we can start processing the inputs.", "Intuition - We need to find a partition in nums1 and corresponding partition in nums2 such that the total number of elements in left is equal to the total number of elements in right and all the elements in left is less than or equal to all the elements in right."]

    },
    {
        "title": "Minimum Number of Arrows to Burst Balloons",
        "prob_desc": "There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [Xstart, Xend] denotes a balloon whose horizontal diameter stretches between Xstart and Xend. You do not know the exact y-coordinates of the balloons. Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with Xstart and xend is burst by an arrow shot at x if Xstart <= x <= Xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path. Given the array points, return the minimum number of arrows that must be shot to burst all balloons.",
        "link": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
        "solution_desc": ["The solution will follow a Greedy Approach", "We start by sorting the array in ascending order based on Xstart and breaking tie using Xend.", 
        "We iterate through the array from the starting and our intuition should be to find a max point in X axis from where if we shot an arrow in Y-direction can burst maximum number of balloons. Then keep on finding such max points till we have no balloon left in the given array. " ]

    },


]

export const median_of_two_sorted_arrays = `
class Solution {
    public:
        double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
            
            
            
            if(nums1.size()>nums2.size())
                return findMedianSortedArrays(nums2, nums1);
            
            
            
            int l=0, h=nums1.size();
            
            int total = nums1.size() + nums2.size();
            
            while(l<=h){
                
                int pa = l+(h-l)/2;
                
                int pb = ((total+1)/2)-pa;
                
                
                int almx = (pa==0)? INT_MIN : nums1[pa-1];
                
                int armn = (pa==nums1.size()) ? INT_MAX : nums1[pa];
                
                
                int blmx = (pb==0)? INT_MIN : nums2[pb-1];
                
                int brmn = (pb==nums2.size()) ? INT_MAX : nums2[pb];
            
                
                if(almx <= brmn && blmx <= armn){
                    
                    if(total%2!=0){
                        return (double)max(almx, blmx);
                    }
                    else{
                        return ((double)max(almx, blmx) + (double)min(armn, brmn))/2.00;
                    }
                }
                
                else if(almx>brmn)
                    h=pa-1;
                
                else
                    l = pa+1;
                
                
            }
            
            return 0.00;
            
            
        }
    };
`;

export const min_burst_balloons = `
class Solution {
    static bool comp(vector <int> &p, vector <int>  &q){
        if(p[0]<q[0])
           return true;
        else if(p[0]==q[0])
            return p[1]<=q[1];

        return false;
    }
public:
    int findMinArrowShots(vector<vector<int>>& points) {

        // sort the given array in ascending order according to the Xstart
        // and break a tie with Xend if any
        sort(points.begin(), points.end(), comp);
        
        int i=0;
        int count = 0;

        while(i<points.size()){
            
            int j=i+1;
            // current point where we can shot an arrow
            int mn = points[i][1];

            while(j<points.size()){
                // Need to update the minimum - as sorting is based on Xstart
                // There can be an element which has higher starting, 
                // but lower ending
                mn = min(mn, points[j][1]);

                // If the arrow is shot up from this range
                if(mn>=points[j][0] && mn<=points[j][1]){
                    j++;
                }
                else
                    break;
            }
            // increasing the count of arrows
            count++;
            i=j;
        }

        return count;
    }
};
`;