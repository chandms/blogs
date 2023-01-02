import React, {useEffect} from 'react'
import Comment from './Comment'


const Footer = () => {
  const commentBox = React.createRef();

  useEffect(() => {
    const commentScript = document.createElement('script')
    const commentsTheme =  'github-dark'

    commentScript.async = true
    commentScript.src = 'https://utteranc.es/client.js'
    commentScript.setAttribute('repo', 'chandms/blog_comments')
    commentScript.setAttribute('issue-term', 'pathname')
    commentScript.setAttribute('id', 'utterances')
    commentScript.setAttribute('label', 'comment')
    commentScript.setAttribute('theme', commentsTheme)
    commentScript.setAttribute('crossorigin', 'anonymous')
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
    const removeScript = () => {
      commentScript.remove();
      document.querySelectorAll(".utterances").forEach(el => el.remove());
    };
    return () => {
      removeScript();
    };
  }, [])
  return (
    <>
      <Comment ref={commentBox} />
    </>
  )
}
export default Footer;