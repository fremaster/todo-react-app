import { Component } from 'react';
import Header from 'components/header';
import TodoIcon from 'components/todoIcon';
import IconSelector from 'components/iconSelector';
import styles from './index.module.scss';
import { Popover2 } from '@blueprintjs/popover2';
import { Button, Switch, Position } from '@blueprintjs/core';
import CategorySelector from './categorySelector';
import { DatePicker } from '@blueprintjs/datetime';

export default class NewTodo extends Component {

    render() {
        return (
            <div className={styles.root}>
                <Header title='Новое дело' subtitle='3 дела на сегодня' />
                <div className={styles.todoIcon}>
                    <Popover2
                        minimal
                        canEscapeKeyClose
                        content={<IconSelector />}
                        position={Position.BOTTOM}>
                        <TodoIcon icon='plus' />
                    </Popover2>
                </div>
                <form className={styles.form}>
                    <div className={styles.category}>
                        <Popover2
                            minimal
                            canEscapeKeyClose
                            content={<CategorySelector />}
                            position={Position.BOTTOM_LEFT}>
                            <input placeholder='Категория' readOnly />
                        </Popover2>
                    </div>
                    <div>
                        <div className={styles.inputGroup}>
                            <input placeholder='Название задачи' />
                            <Button icon={'cross'} minimal />
                        </div>
                    </div>
                    <div>
                        <div className={styles.inputGroup}>
                            <input placeholder='Где?' />
                            <Button icon={'cross'} minimal />
                        </div>
                    </div>
                    <div className={styles.date}>
                        <Popover2
                            minimal
                            autoFocus={false}
                            enforceFocus={false}
                            content={
                                <div>
                                    <DatePicker />
                                </div>
                            }
                            position={Position.TOP}
                            popoverClassName={'bp3-dateinput-popover2'}>
                            <div className={styles.inputGroup}>
                                <input placeholder='Когда?' readOnly />
                                <Button icon={'cross'} minimal />
                            </div>
                        </Popover2>
                        <div className={styles.allDay}>
                            <Switch label='Все дни' />
                        </div>
                    </div>
                    <Button large minimal fill>
                        ДОБАВИТЬ ЗАДАЧУ
                    </Button>
                </form>
            </div>
        )
    }
}

