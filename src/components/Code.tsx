type Props = {
  code: string
}

const Code = (props: Props) => {
  return (
    <div>
      <div className="border-2 border-cacao bg-cacao rounded-t-lg mx-4">
        <h3 className="text-cream px-4 text-xs">Code</h3>
      </div>
      <div className="border-2 border-cacao rounded-b-lg mx-4">
        <div className="px-4 py-4">
          {
            props.code.split("\n").map((line, index) => {
              return <pre key={index} className="text-cacao font-mono sm:text-sm text-xs">{line}</pre>
            })
          }
        </div>
      </div>
    </div>
  )
}

export { Code }
