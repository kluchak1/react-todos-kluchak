import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'


import {cn} from '@/lib/utils/mergeCss'
import {EditTaskFrom} from '../forms/EditTaskFrom'


function EditTask({children, className, uid, payload}) {
	return (
		<Dialog className="">
			<DialogTrigger className="bg-black text-white w-full py-2.5 rounded-lg mt-3 font-semibold">
				Edit
			</DialogTrigger>
			<DialogContent className="">
				<DialogHeader>
					<DialogTitle>Edit Task</DialogTitle>
					<EditTaskFrom uid={uid} payload={payload} />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export {EditTask}
