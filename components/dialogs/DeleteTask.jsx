import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

import {cn} from '@/lib/utils/mergeCss'
import { DeleteTaskForm } from '@/components/forms/DeleteTaskForm'

function DeleteTask({children, className, uid, payload}) {
	return (
		<Dialog className="">
			<DialogTrigger className="bg-black text-white w-full py-2.5 rounded-lg mt-3 font-semibold">
				Delete
			</DialogTrigger>
			<DialogContent className="">
				<DialogHeader>
					<DialogTitle>Delete Task</DialogTitle>
				</DialogHeader>
				<DeleteTaskForm uid={uid} payload={payload} />
			</DialogContent>
		</Dialog>
	)
}

export {DeleteTask}
