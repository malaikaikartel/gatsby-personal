import React from 'react'
import DateIcon from '../assets/date_icon'
import TagIcon from '../assets/tag_icon'

export default function Post({data}) {
    return (
            <div className="blog-post mt-8 cursor-pointer" key={data.frontmatter.title}>
                <h1 className="text-4xl mb-2">{data.frontmatter.title}</h1>
                <div className="post-info flex items-center mb-6 flex-wrap"> 
                    <DateIcon width={20} fill="#17b06b"/>
                    <span className="ml-2 text-sm mt-1">{new Date(data.frontmatter.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="ml-2  mt-1">·</span>
                    <span className="ml-2 text-sm mt-1">~{parseInt(data.wordCount.words / 200) + 1} min read</span>

                </div>
                <div className="mb-4">{data.excerpt}</div>
                <div className="text-sm flex mb-8 post-info items-center flex-wrap">
                    <div  style={{display: "block"}}><TagIcon width={20} fill="#17b06b"/></div>
                    {
                        data.frontmatter.keywords?.split(", ").map(keyword => <span className="ml-2 underline" key={keyword}>#{keyword}</span>)
                    }
                </div>
            </div>
    )
}
