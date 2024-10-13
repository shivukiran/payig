export function Button({label, onClick}) {
    return <button onClick={onClick} type="button"                      className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">{label}</button>
}
  