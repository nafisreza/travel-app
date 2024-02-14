
const ContainerMain: React.FC<{ children: React.ReactNode; className: string }> = ({ children, className }) => {
    return (
        <main className={["p-3 xs:px-4 sm:px-8 py-3 xs:py-4 sm:py-8", className].join(" ")}>
            {children}
        </main>
    )
}

export default ContainerMain