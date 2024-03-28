import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleDetailsProps {
    className?: string;
}

export const ArticleImageBlockComponent = memo((props: ArticleDetailsProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            ArticleImageBlockComponent
        </div>
    );
});
