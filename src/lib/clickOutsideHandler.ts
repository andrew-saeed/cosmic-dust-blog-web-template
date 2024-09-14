type Callback = () => void

const clickOutsideHandler = (() => {
    const listeners = new Map<HTMLElement, Callback>()
    let isListening = false

    function handleGlobalClick(event: MouseEvent) {
        const target = event.target as Node
        listeners.forEach((callback, element) => {
            if (!element.contains(target)) {
                callback()
            }
        })
    }

    function startListening() {
        if (!isListening) {
            document.addEventListener('click', handleGlobalClick)
            isListening = true
        }
    }

    return {
        add(element: HTMLElement, callback: Callback): void {
            listeners.set(element, callback)
            startListening()
        },
        remove(element: HTMLElement): void {
            listeners.delete(element)
            if (listeners.size === 0) {
                document.removeEventListener('click', handleGlobalClick)
                isListening = false
            }
        }
    }
})()

export default clickOutsideHandler