import React, {useEffect, useState} from 'react';
import SchedulingPanelForm from 'src/app/modules/admin/appointments/scheduling-panels/scheduling-panel-form';
import {useEditModal, useSelectAll} from 'src/app/shared/admin/hooks';
import {KFlexRow} from 'src/app/shared/components/flex';
import {UseConfirmationModalWithDispatch} from 'src/app/shared/components/modal/delete-confirmation-modal';
import {KTextButton, KIconButton} from 'src/app/shared/components/primitives/buttons';
import {useAppDispatch} from 'src/app/store';
import {adminDashboardActions} from 'src/app/store/admin/dashboard';
import {schedulingPanelActions, schedulingPanelSelectors} from 'src/app/store/admin/panels';

const SchedulingPanelsSelector: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const schedulingPanels = useSelectAll(schedulingPanelSelectors, schedulingPanelActions);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [setDeleteId, confirmDeleteModal] = UseConfirmationModalWithDispatch(schedulingPanelActions.deleteEntity);
    const [openModal, formModal] = useEditModal(schedulingPanelSelectors, schedulingPanelActions, SchedulingPanelForm);

    const selectPanel = (index: number) => schedulingPanels[index];

    useEffect(() => {
        if (schedulingPanels && selectPanel(selectedIndex)) {
            dispatch(adminDashboardActions.setSelectedPanelId(selectPanel(selectedIndex).id));
        }
    }, [schedulingPanels])

    const handlePanelClick = (index: number) => () => {
        setSelectedIndex(index);
        dispatch(adminDashboardActions.setSelectedPanelId(selectPanel(index).id));
    }

    const handleDeleteClick = () => {
        setDeleteId(selectPanel(selectedIndex).id);
    }

    return (
        <KFlexRow className="m-2" align={'center'}>
            {confirmDeleteModal}
            {formModal}
            {schedulingPanels.map((panel, i) =>
                <KTextButton key={i}
                             className={selectedIndex === i ? 'underline-accent' : ''}
                             onClick={handlePanelClick(i)}
                >{panel.name}</KTextButton>)
            }
            <KIconButton color="primary" icon="plus" onClick={openModal(null)}/>
            <KIconButton color="accent" icon="edit" onClick={openModal(selectPanel(selectedIndex))}/>
            <KIconButton color="danger" icon="trash" onClick={handleDeleteClick}/>
        </KFlexRow>
    )
}


export default SchedulingPanelsSelector;
