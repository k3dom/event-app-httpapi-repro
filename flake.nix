{
  description = "Standalone Expo repro for effect/unstable/httpapi";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = { nixpkgs, ... }:
    let
      eachSupportedSystem = f:
        nixpkgs.lib.genAttrs nixpkgs.lib.systems.flakeExposed (
          system:
            f {
              pkgs = import nixpkgs {
                inherit system;
                config.allowUnfree = true;
              };
            }
        );
    in {
      devShells = eachSupportedSystem ({ pkgs }: {
        default = pkgs.mkShell {
          packages = with pkgs; [
            corepack
            nodejs_24
            jdk
          ];

          env = {
            NPM_CONFIG_UPDATE_NOTIFIER = "false";
            JAVA_HOME = "${pkgs.jdk}";
          };
        };
      });

      formatter = eachSupportedSystem (args: args.pkgs.alejandra);
    };
}
