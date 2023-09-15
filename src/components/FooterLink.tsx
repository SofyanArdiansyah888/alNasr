import React from "react";
//
const FooterLink = (props: Queries.MarkdownRemarkFrontmatterFooterLinks) => (
    <div className={"text-white"}>
        <p className={"text-xl font-semibold"}>{props?.title}</p>
        <ul className={"space-y-2 mt-4 text-md"}>
            {props?.submenus?.map((submenu) => (
                <li className={"cursor-pointer hover:text-primary"}>
                    {submenu?.title}
                </li>
            ))}
        </ul>
    </div>
);

export default FooterLink;
