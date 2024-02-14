export type TitleProps = { children: React.ReactNode, className: string }

const h1: React.FC<TitleProps> = ({ children, className }) =>
    <h1 className={["text-green-500 text-xl font-semibold", className].join(" ")}>{children}</h1>

const h2: React.FC<TitleProps> = ({ children, className }) =>
    <h2 className={["text-green-500 text-xl font-semibold", className].join(" ")}>{children}</h2>

const h3: React.FC<TitleProps> = ({ children, className }) =>
    <h3 className={["text-green-500 text-xl font-semibold", className].join(" ")}>{children}</h3>

const Title = { h1, h2, h3 }

export default Title;