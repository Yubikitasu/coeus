interface NBButtonProps {
    children: React.ReactNode
}

export default function NavbarButton(
    props: NBButtonProps
) {
    return(
        <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background hover:bg-accent hover:text-accent-foreground h-9 p-4 cursor-pointer">
            {props.children}
        </div>
    )
}