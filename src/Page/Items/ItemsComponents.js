import {
    Button,
    CreateButton,
    ExportButton,
    FilterButton,
    IconEvent,
    TopToolbar,
} from 'react-admin';

export const ListActions = () => (
    <TopToolbar>
        <FilterButton/>
        <CreateButton/>
        <ExportButton/>
        <Button
            onClick={() => { alert('Your custom action'); }}
            label="Show calendar"
        >
            <IconEvent/>
        </Button>
    </TopToolbar>
);