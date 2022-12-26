using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace YADA.WebApi.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedProfile : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Profiles_Preferences_PreferenceId",
                table: "Profiles");

            migrationBuilder.DropForeignKey(
                name: "FK_Profiles_Settings_SettingId",
                table: "Profiles");

            migrationBuilder.AlterColumn<int>(
                name: "SettingId",
                table: "Profiles",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "PreferenceId",
                table: "Profiles",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddForeignKey(
                name: "FK_Profiles_Preferences_PreferenceId",
                table: "Profiles",
                column: "PreferenceId",
                principalTable: "Preferences",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Profiles_Settings_SettingId",
                table: "Profiles",
                column: "SettingId",
                principalTable: "Settings",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Profiles_Preferences_PreferenceId",
                table: "Profiles");

            migrationBuilder.DropForeignKey(
                name: "FK_Profiles_Settings_SettingId",
                table: "Profiles");

            migrationBuilder.AlterColumn<int>(
                name: "SettingId",
                table: "Profiles",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "PreferenceId",
                table: "Profiles",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Profiles_Preferences_PreferenceId",
                table: "Profiles",
                column: "PreferenceId",
                principalTable: "Preferences",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Profiles_Settings_SettingId",
                table: "Profiles",
                column: "SettingId",
                principalTable: "Settings",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
