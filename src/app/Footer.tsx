export default function Footer() {
    return (
        <footer className="flex flex-col-reverse gap-4 md:flex-row justify-between items-center px-8 py-6 text-slate-500">
            <p className="text-center">© 2024 Polaris North Star Planner and Management System. All rights reserved.</p>
            <img src="/polaris-logo.png" alt="polaris logo" height={64} width={64}/>
        </footer>
    )
}