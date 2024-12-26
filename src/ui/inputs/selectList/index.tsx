import React, { useState } from "react";
import styles from "./selectList.module.css";
import cls from "classnames";

type ListType = {
  id: number;
  name: string;
};

interface ISelect {
  label: string;
  list: ListType[];
  selectHandler: React.Dispatch<React.SetStateAction<any>>;
  classnames?: string;
}

export const SelectList = ({
  list,
  label,
  classnames,
  selectHandler,
}: ISelect): JSX.Element => {

    const [text, setText] = useState<string>('');
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<ListType | null>(null);

    const [filteredList, setFilteredList] = useState<ListType[]>([])

    const sortByAlphabet = (list: ListType[], ascending: boolean) => {
    return [...list].sort((a, b) => {
        if (a.name < b.name) return ascending ? -1 : 1;
        if (a.name > b.name) return ascending ? 1 : -1;
        return 0;
    });
    };

    // Обработчик фокуса
    const handleInputFocus = () => {
        setIsFocus(true);
    };

    // Обработчик потери фокуса
    const handleInputBlur = () => {
        setTimeout(() => setIsFocus(false), 200);
    };

    // Обработчик изменения ввода
    const handleInputChanged = (name: string) => {
        setText(name);
        const filtered = list.filter((item) =>
            item.name.toLowerCase().includes(name.toLowerCase())
        );
        setFilteredList(filtered);
    };

    // Обработчик выбора элемента списка
    const handleSelectList = (item: ListType) => {
        setText(item.name);
        setSelectedItem(item);
        selectHandler(item);
        setIsFocus(false);
    };

    return (
        <div >

        </div>
    );
};
