'use client'

import { api } from "@/convex/_generated/api"
import { useOrganization, useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react"
import { LatexRenderer } from "../LatexRenderer";
import { getCurrentUser } from "@/lib/get-current-user";

export default function Messages() {
    const { user } = useUser();
    const { organization } = useOrganization();
    let query = useQuery(api.query.findPost, { userId: user?.id, orgId: organization?.id });
    
    if (!user || !organization) {
        return (
            <div>Not logged in or no organization</div>
        )
    } 
    if (user && organization) {
        if (query != null) {
            // if the message content is not latex, we can render it directly
            return (
                <div>
                    {query.map((message) => {
                        if (message.content.includes("$")) {
                            let content = message.content;
                            const regex = /\$\$(.*?)\$\$|\$(.*?)\$|\\\[(.*?)\\\]|([^$\\]+)/g;
                            const matches = [...content.matchAll(regex)].map(match => {
                                return {
                                  type: match[1] || match[2] || match[3] ? "latex" : "text",
                                  content: match[1] || match[2] || match[3] || match[4]
                                };
                              });
                            return (
                            <div key={message._id}>
                                {
                                    matches.map((match, index) => {
                                        if (match.type === "latex") {
                                            return <LatexRenderer key={index} latex={match.content} id={message._id + index} />
                                        } else {
                                            return <span key={index}>{match.content}</span>
                                        }
                                    })
                                }
                            </div>
                        )} else {
                            return (
                                <div key={message._id}>
                                    <p>{message.username}: {message.content}</p>
                                </div>
                            )
                        }
                    })}
                </div>
            )
        } else {
            return (
                <div>No messages found</div>
            )
        }
    }
}