import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}></div>
            <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>
                На главную
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                О сайте
            </AppLink>
        </div>
    );
};
