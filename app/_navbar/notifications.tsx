import { MoneyTime, User } from "iconsax-react"

export const Item = () => {
    return (
        <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 dark:bg-secondary-light/15">
                <User size="20" color="currentColor" variant="Outline" />
            </div>
            <div>
                <p className="font-medium text-slate-600 dark:text-navy-100">User Photo Changed</p>
                <div className="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300">John Doe changed his avatar photo</div>
            </div>
        </div>
    )
}

export default function Notifications() {
    return (
        <div className="w-96 p-4 space-y-4">
            <div className="h3 text-lg">Notifications</div>
            <div className="space-y-3">
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    )
}