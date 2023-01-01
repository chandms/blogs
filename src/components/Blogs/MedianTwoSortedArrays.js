import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid";
import { CopyBlock,  monokaiSublime } from "react-code-blocks";

const code_obj = `
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

export default function MedianOfTwoSortedArrays(){
    return (<div className='bg-pink-200'>
        <div className='h-24 bg-gradient-to-r from-purple-500 to-pink-500" flex justify-center shadow-lg'>
            <h1 className='m-auto font-mono text-white'>Median of Two Sorted Arrays</h1>
        </div>
        <div className='flex justify-center items-center'>
            <h2 className='bg-white-100 text-amber-900 antialiased hover:subpixel-antialiased'>Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).</h2>
            
            <a
            href="https://leetcode.com/problems/median-of-two-sorted-arrays/"
            className=" inline-flex items-center border-0 py-1 px-2 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">
            Leetcode Link
            <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
        </div>
        <div className='mt-3 shadow-lg bg-violet-300'>
            
            <p>For this problem, we are considering the nums1 array to be of smaller length. Therefore if the that is not the case, need to swap the arrays before we can start processing the inputs.</p>
            <p className='mt-2'>Intuition - We need to find a partition in nums1 and corresponding partition in nums2 such that the total number of elements in left is equal to the total number of elements in right and all the elements in left is less than or equal to all the elements in right.</p>

                


        </div>
        <div className='mt-3'>
        <CopyBlock
            text={code_obj}
            language="cpp"
            theme={monokaiSublime}
            wrapLines
            />  
        </div>
    </div>);
}